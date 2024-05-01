import { getFullUrl } from '@/utils/utils';
import { useState } from 'react';

export const useSubmitLead = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitEmail = async (email, campaignId, campaignName, country, acceptedTerms) => {
    setLoading(true);
    setError(null);

    const apiEndpoint = getFullUrl('/leads');

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lead: {
            campaign_id: campaignId,
            campaign_name: campaignName,
            email: email,
            country: country,
            accepted_terms: acceptedTerms,
          },
          // Include UTM parameters if they exist
          utm_source: window.location.href.match(/utm_source=([^&]+)/)?.[1],
          utm_medium: window.location.href.match(/utm_medium=([^&]+)/)?.[1],
          utm_campaign: window.location.href.match(/utm_campaign=([^&]+)/)?.[1],
          utm_term: window.location.href.match(/utm_term=([^&]+)/)?.[1],
          utm_content: window.location.href.match(/utm_content=([^&]+)/)?.[1],
          gclid: window.location.href.match(/gclid=([^&]+)/)?.[1],
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      // Handle the response data as needed
      console.log(data);
      alert('Email submitted successfully!');
    } catch (error) {
      console.error('Failed to submit email:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { submitEmail, loading, error };
};
