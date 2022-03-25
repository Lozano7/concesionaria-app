import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiDatum } from '../types/api_types/interfaces';

const useAxiosFetch = (dataUrl: string) => {
  const [data, setData] = useState<ApiDatum[]>([]);
  const [fetchError, setFetchError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    let isMounted: boolean = true;
    const source = axios.CancelToken.source();
    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const { data } = await axios(url, { cancelToken: source.token });
        const { data: dataFromApi } = data;
        if (isMounted) {
          setData(dataFromApi);
          setIsLoading(false);
          setFetchError(null);
        }
      } catch (error) {
        if (error instanceof Error) {
          if (isMounted) {
            setFetchError(error.message);
            setIsLoading(false);
            setData([]);
          }
        }
      }
    };
    fetchData(dataUrl);

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [dataUrl]);
  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
