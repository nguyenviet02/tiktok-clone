
import { dtbUsers, dtbVideos } from '../index';
import { DtbContext } from '../index';

function DtbProvider({ children }) {
  return (
    <DtbContext.Provider value={[dtbUsers, dtbVideos]}>
      {children}
    </DtbContext.Provider>
  )
}

export default DtbProvider;