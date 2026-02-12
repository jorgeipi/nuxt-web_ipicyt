<script setup lang="ts">
import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

onMounted(() => {
  // Inicializar el mapa centrado en el IPICYT
  const map = L.map('map').setView([22.149752119933762, -101.03577289743797], 15);

  // Añadir la capa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Añadir un marcador en el IPICYT
  L.marker([22.149752119933762, -101.03577289743797])
    .addTo(map)
    .bindPopup('IPICYT, San Luis Potosí')
    .openPopup();

  // Coordenadas para el punto de inicio y el IPICYT
  const startPoint = [22.148455365551577, -101.01594538907239];
  const endPoint = [22.149752119933762, -101.03577289743797];

  const routingUrl = `https://router.project-osrm.org/route/v1/driving/${startPoint[1]},${startPoint[0]};${endPoint[1]},${endPoint[0]}?overview=full&geometries=geojson`;

  fetch(routingUrl)
    .then((response) => response.json())
    .then((data) => {
      const routeCoordinates = data.routes[0].geometry.coordinates.map(
        ([lng, lat]: [number, number]) => [lat, lng]
      );

      L.polyline(routeCoordinates, {
        color: 'blue',
        weight: 4,
        opacity: 0.8,
      }).addTo(map);

      map.fitBounds(routeCoordinates);

      const distance = (data.routes[0].distance / 1000).toFixed(2);
      const duration = (data.routes[0].duration / 60).toFixed(1);

      const infoControl = L.control({ position: 'topright' });

      infoControl.onAdd = function () {
        const div = L.DomUtil.create('div', 'leaflet-control-info');
        div.innerHTML = `<b>De:</b> Parque "De Morales" Juan H. Sánchez<br><b>A:</b> Instituto Potosino de Investigación Científica y Tecnológica A.C.<br>
          <p>Distancia: ${distance} km</p><p>Tiempo estimado: ${duration} min</p>`;
        return div;
      };

      infoControl.addTo(map);
    })
    .catch((error) => console.error('Error al cargar la ruta:', error));
});
</script>

<template>
  <div id="map" class="mapaIpicyt"></div>
</template>


<style>
.leaflet-control-info {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 999 !important;

  p {
    margin: 0%;
  }

  @media (max-width: 480px) {
    /* font-size: 0.5rem; */

    p {
      /* font-size: 0.5rem; */
    }
  }
}

.leaflet-top {
  z-index: 996;
}

.leaflet-popup-content {
  @media (max-width: 480px) {
    /* font-size: 0.5rem; */
    width: 55px;
    height: 1px;
  }
}

.mapaIpicyt {
  height: 437px;
  /* width: 699px; */
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media (max-width: 480px) {
    /* width: 300px; */
    /* height: 237px; */
  }
}
</style>
