import { useCallback, useState } from "react";

export const useModal = () => {
  const [successModal, setSuccessModal] = useState(false);
  const [failureModal, setFailureModal] = useState(false);

  const openSuccess = useCallback(() => {
    setSuccessModal(true);
  }, [setSuccessModal]);

  const openFailure = useCallback(() => {
    setFailureModal(true);
  }, [setFailureModal]);

  const closeModal = useCallback(() => {
    setFailureModal(false);
    setSuccessModal(false);
  }, [setFailureModal]);

  return { openSuccess, openFailure, closeModal, successModal, failureModal };
};
