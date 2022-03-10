import React from 'react';
import './App.css';
import { Alert } from './components/Ui-kit/alert';
import { Button } from './components/Ui-kit/button';
import { Themes } from './components/Ui-kit/types';
import { Checkbox } from './components/Ui-kit/checkbox';
import { DatabaseAlert } from './components/Ui-kit/databaseAlert';
import { EditingConfirmationButton } from './components/Ui-kit/editingConfirmationButton';
import { FinalStatusBlock } from './components/Ui-kit/finalStatusBlock';
import { ModalClosingButton } from './components/Ui-kit/modalClosingButton';
import { MoreHorizontalButton } from './components/Ui-kit/moreHorizontalButton';
import { MoreVerticalButton } from './components/Ui-kit/moreVerticalButton';
import { PauseButton } from './components/Ui-kit/pauseButton';
import { PlayButton } from './components/Ui-kit/playButton';
import { Status } from './components/Ui-kit/status';
import { FilterListButton } from './components/Ui-kit/filterListButton';

function App() {
  return (
    <div className='ui-kit'>
      <div className='first-column'>
        <h1>Buttons</h1>
        <div className='section'>
          <Button theme={Themes.red} />
          <Button theme={Themes.white}/>
        </div>
        <div className='section'>
          <ModalClosingButton />
          <EditingConfirmationButton />
        </div>

        <div className='section'>
          <MoreHorizontalButton />
          <MoreVerticalButton />
          <FilterListButton />
        </div>

        <div className='section play-pause-buttons-section'>
          <div>
            <PlayButton status='Wait'/>
            <PauseButton status = 'Wait'/>
          </div>
          <div>
            <PlayButton status='Work'/>
            <PauseButton status = 'Work'/>
          </div>
          <div>
            <PlayButton status='Complete'/>
            <PauseButton status = 'Complete' />
          </div>
          <div>
            <PlayButton status='Init'/>
            <PauseButton status = 'Init' />
          </div>
        </div>
      </div> 
      <div className='second-column'>
        <h1>Grid</h1>
        <div className='section final-status-section'>
          <FinalStatusBlock finalStatus='Success' />
          <FinalStatusBlock finalStatus='Fail' />
          <FinalStatusBlock finalStatus='Wait'/>
        </div>
        <div className='section status-section'>
          <Status status='Work' />
          <Status status='Wait' />
          <Status status='Complete' />
          <Status status='Init' />
        </div>
        <div className='section checkbox-section'>
          <Checkbox />
          <Checkbox checked />
        </div>
      </div> 
      <div className='third-column'>
        <h1>Alerts</h1>
        <div className='section'>
          <Alert type='success' />
          <Alert type='error' />
        </div>
      </div> 
      <div className='fourth-column'>
        <h1>Database work alerts</h1>
        <div className='section'>
          <DatabaseAlert type='delete' />
          <DatabaseAlert type='update' />
          <DatabaseAlert type='create' />
        </div>
      </div> 
    </div>
  );
}

export default App;
