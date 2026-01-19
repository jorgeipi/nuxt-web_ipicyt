import { defineStore } from 'pinia';
const baseStorage = import.meta.env.VITE_STORAGE
export const useMetaStore = defineStore('meta', {
  state: () => ({
    currentMeta: {},
    defaultImage: `${baseStorage}/source/preview/previewImage_logoblue.png`
  }),

  actions: {
    validateImageUrl(imageUrl) {
      if (!imageUrl) {
        return this.defaultImage;
      }

      const hasIssues = 
        imageUrl.includes('undefined') ||
        imageUrl.includes('null') ||
        imageUrl.includes('//.') ||
        imageUrl.includes('//') && !imageUrl.startsWith('http');

      if (hasIssues) {
        return this.defaultImage;
      }

      if (imageUrl.startsWith('/') && !imageUrl.startsWith('//')) {
        return this.defaultImage;
      }

      return imageUrl;
    },

    setMetaForNote(noteData) {
      const imageUrl = this.validateImageUrl(noteData.image);
      
      const title = noteData.title || 'IPICYT';
      const description = noteData.description || `Información sobre ${title}`;
      const url = noteData.url || window.location.href;
      const publishedAt = noteData.published_at || new Date().toISOString();

      this.currentMeta = {
        title: `${title} - IPICYT`,
        metaTags: [
          {
            name: 'description',
            content: description
          },
          {
            property: 'og:type',
            content: 'article'
          },
          {
            property: 'og:url',
            content: url
          },
          {
            property: 'og:title',
            content: title
          },
          {
            property: 'og:description',
            content: description
          },
          {
            property: 'og:image',
            content: imageUrl
          },
          {
            property: 'og:image:secure_url',
            content: imageUrl
          },
          {
            property: 'og:image:width',
            content: '1200'
          },
          {
            property: 'og:image:height',
            content: '630'
          },
          {
            property: 'og:site_name',
            content: 'IPICYT - Instituto Potosino de Investigación Científica y Tecnológica'
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image'
          },
          {
            name: 'twitter:url',
            content: url
          },
          {
            name: 'twitter:title',
            content: title
          },
          {
            name: 'twitter:description',
            content: description
          },
          {
            name: 'twitter:image',
            content: imageUrl
          },
          {
            name: 'twitter:site',
            content: '@ipicyt'
          },
          {
            name: 'twitter:creator',
            content: '@ipicyt'
          },
          {
            property: 'article:published_time',
            content: publishedAt
          }
        ]
      };

      this.applyMeta();

      if (import.meta.env.DEV) {
        console.group('✅ Meta Tags Aplicados');
        console.log('📄 Título:', this.currentMeta.title);
        console.log('🖼️ Imagen:', imageUrl);
        console.log('🔗 URL:', url);
        console.groupEnd();
      }
    },

    applyMeta() {
      document.title = this.currentMeta.title;
      this.removeMetaTags();
      this.currentMeta.metaTags.forEach(tag => {
        this.addMetaTag(tag);
      });
    },

    addMetaTag(tag) {
      const meta = document.createElement('meta');
      
      Object.keys(tag).forEach(key => {
        meta.setAttribute(key, tag[key]);
      });
      
      meta.setAttribute('data-vue-router-controlled', 'true');
      
      document.head.appendChild(meta);
    },

    removeMetaTags() {
      const metaTags = document.querySelectorAll('meta[data-vue-router-controlled]');
      metaTags.forEach(tag => tag.remove());
    },

    resetMeta() {
      this.currentMeta = {};
      this.removeMetaTags();
      
      document.title = 'Instituto Potosino de Investigación Científica y Tecnológica A.C.';
    },

    getCurrentMetaTags() {
      const tags = {};
      this.currentMeta.metaTags?.forEach(tag => {
        const key = tag.property || tag.name;
        tags[key] = tag.content;
      });
      return tags;
    }
  }
});
