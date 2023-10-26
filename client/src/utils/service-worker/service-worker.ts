Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
      // User granted permission, you can now subscribe to push notifications
      // Store the subscription details on your server
    }
  });
  

self.addEventListener('push', function(event) {
    const options = {
      body: event.data.text(),
      icon: 'icon.png',
      // Add other notification options as needed
    };
  
    event.waitUntil(
      self.registration.showNotification('Cameo Clone', options)
    );
  });
  