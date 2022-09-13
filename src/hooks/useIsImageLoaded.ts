import { useCallback, useEffect, useState } from 'react';

const useIsImageLoaded = (imageUrl: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);
  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.addEventListener('load', onLoad);

    return () => {
      image.removeEventListener('load', onLoad);
    };
  }, [imageUrl]);

  return isLoaded;
};

export default useIsImageLoaded;
