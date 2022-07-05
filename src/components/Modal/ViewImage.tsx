import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.800">
        <Image src={imgUrl} />

        <ModalFooter alignItems="start" display="flex" justifyContent="start">
          <a href={imgUrl} target="blank">
            Abrir original
          </a>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
