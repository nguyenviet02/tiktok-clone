import { DtbContext } from '../index';
import { useContext } from 'react';

function useDtb() {
  const [dtbUsers, dtbVideos] = useContext(DtbContext);
  return ([dtbUsers, dtbVideos]);
};

export default useDtb;