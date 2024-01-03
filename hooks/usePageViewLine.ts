import { useEffect } from 'react';

const pageViewHandler = async (props: { title: string }) => {
  const url = '/api/page-view';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    });
    return response.json();
  } catch (error) {
    console.log('Error', error);
  }
};

export const usePageViewLine = (title: string) => {
  useEffect(() => {
    pageViewHandler({ title });
  }, []);
};
