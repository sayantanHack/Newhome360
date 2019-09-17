import {ReactInstance, Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Render to location
  r360.renderToLocation(r360.createRoot('Truck'), r360.getDefaultLocation());
  r360.renderToLocation(r360.createRoot('Lypzo'), r360.getDefaultLocation());
  r360.renderToLocation(r360.createRoot('Turtle'), r360.getDefaultLocation());
  r360.renderToLocation(r360.createRoot('Gretz'), r360.getDefaultLocation());
  r360.renderToLocation(r360.createRoot('Banana'), r360.getDefaultLocation());
  r360.renderToLocation(r360.createRoot('Xiotz'), r360.getDefaultLocation());
  r360.renderToLocation(r360.createRoot('Cards'), r360.getDefaultLocation()); 
  r360.renderToLocation(r360.createRoot('Errit'), r360.getDefaultLocation());
  r360.renderToLocation(r360.createRoot('Pig'), r360.getDefaultLocation());
  r360.renderToLocation(r360.createRoot('Nerka'), r360.getDefaultLocation());
  r360.renderToLocation(r360.createRoot('Rhino'), r360.getDefaultLocation());
  r360.renderToLocation(r360.createRoot('Bull'), r360.getDefaultLocation());

  // Render app content to default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Home', {}),
    r360.getDefaultSurface()
  );

  // Set background image
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
};

window.React360 = {init};
