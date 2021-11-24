import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import {Button} from '@material-ui/core';
import { AddBox } from '@material-ui/icons';

import ModalComp from './ModalComp';

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div className='row justify-content-center mt-3'>
      <Card onClick={() => setShow(true)}>

          <Button
              variant="contained"
              startIcon={<AddBox />}
              color="primary"
              target="__blank"
            >
              Add Movie
            </Button>
      </Card>
      {show && (
        <ModalComp isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />
      )}
    </div>
  );
};
AddMovie.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
export default AddMovie;
