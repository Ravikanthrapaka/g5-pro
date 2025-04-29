<!DOCTYPE html>
<html>
  <head>
    <title>AR Model Viewer</title>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/jeromeetienne/AR.js/aframe/build/aframe-ar.js"></script>
  </head>
  <body style="margin: 0; overflow: hidden;">
    <a-scene embedded arjs>
      <!-- Marker for AR tracking -->
      <a-marker preset="hiro">
        <!-- 3D Model -->
        <a-entity gltf-model="https://drive.google.com/uc?export=download&id=1L4ZIUezymnuIFjyf6QeyVFBtvP_rFlwv" scale="0.1 0.1 0.1" position="0 0 0"></a-entity>
      </a-marker>

      <!-- Camera Entity -->
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
