import { Grid, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  const [viewModalUrl, setViewModalUrl] = useState('');

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      <ModalViewImage
        imgUrl={viewModalUrl}
        isOpen={!!viewModalUrl}
        onClose={() => setViewModalUrl('')}
      />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {cards?.map(card => (
          <Card data={card} key={card?.id} viewImage={setViewModalUrl} />
        ))}
      </Grid>
    </>
  );
}
