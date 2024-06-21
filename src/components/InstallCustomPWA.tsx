import React, { useEffect, useState } from 'react';

let deferredPrompt: any;

function InstallCustomPWA(): JSX.Element {
  const [installable, setInstallable] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setInstallable(true);
    });

    window.addEventListener('appinstalled', () => {
      // Log install to analytics
      console.log('INSTALL: Success');
    });
  }, []);

  const handleInstallClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    // Hide the app provided install promotion
    setInstallable(false);
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  };

  return (
    <div>
      <header>
        {installable && (
          <button className="btn-rahul mt-4" onClick={handleInstallClick}>
            INSTALL ME
          </button>
        )}
      </header>
    </div>
  );
}

export default InstallCustomPWA;
