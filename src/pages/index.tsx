/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { CardList } from '../components/CardList';
import { Error } from '../components/Error';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { api } from '../services/api';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    ({ pageParam = 0 }) =>
      api
        .get(`/api/images`, {
          params: {
            after: pageParam,
          },
        })
        .then(res => res.data),
    {
      getNextPageParam: pages => (pages?.after ? pages?.after : null),
    }
  );

  const formattedData = useMemo(() => {
    const images = [];

    data?.pages?.forEach(page => {
      images?.push(...page?.data?.map(e => ({ ...e })));
    });

    return images;
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  console.log(data);

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}

        {hasNextPage && (
          <Button
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isLoading ? 'Carregando' : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}
