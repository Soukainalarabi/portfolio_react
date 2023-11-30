import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function FontAwesome() {
    return (
      <>
        <FontAwesomeIcon icon={faHandshake} shake size="3x" />
            <FontAwesomeIcon icon={faEnvelope} spin size="3x" />
      </>
    );
   }