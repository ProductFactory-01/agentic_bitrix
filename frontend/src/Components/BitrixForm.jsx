import { useEffect } from 'react';

const BitrixForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'auto/52/2qc8ap'); // Replace with your form ID if needed
    script.setAttribute('data-skip-moving', 'true');
    script.async = true;
    script.src =
      'https://cdn.bitrix24.com/b11752903/crm/form/loader_52.js?' + (Date.now() / 180000 | 0);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="bitrix-form-container" />;
};

export default BitrixForm;
