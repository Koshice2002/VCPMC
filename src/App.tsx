import './App.css';
import Login from './pages/auth/Login';
import Error from './pages/auth/Error';
import React, { useEffect } from 'react';
import BasicInfo from './pages/auth/BasicInfo';
import Playlist from './pages/playlist/Playlist';
import EditRecord from './pages/record/EditRecord';
import RecordStore from './pages/record/RecordStore';
import PlaylistAdd from './pages/playlist/PlaylistAdd';
import ResetPassword from './pages/auth/ResetPassword';
import PlaylistEdit from './pages/playlist/PlaylistEdit';
import ForgotPassword from './pages/auth/ForgotPassword';
import BroadcastAdd from './pages/broadcast/BroadcastAdd';
import PlaylistDetail from './pages/playlist/PlaylistDetail';
import PlaylistAddSong from './pages/playlist/PlaylistAddSong';
import BroadcastManage from './pages/broadcast/BroadcastManage';
import BroadcastDetail from './pages/broadcast/BroadcastDetail';
import ContractManage from './pages/manage/contract/ContractManage';
import UnitUsedManage from './pages/manage/unitUsed/UnitUsedManage';
import NewPlaylistAddSong from './pages/playlist/NewPlaylistAddSong';
import BroadcastEditDevice from './pages/broadcast/BroadcastEditDevice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BroadcastEditPlaylist from './pages/broadcast/BroadcastEditPlaylist';
import AddExploitContract from './pages/manage/contract/AddExploitContract';
import BroadcastAddNewDevice from './pages/broadcast/BroadcastAddNewDevice';
import EditExploitContract from './pages/manage/contract/EditExploitContract';
import CopyExploitContract from './pages/manage/contract/CopyExploitContract';
import InfoExploitContract from './pages/manage/contract/InfoExploitContract';
import AddAuthorizedContract from './pages/manage/contract/AddAuthorizedContract';
import InfoAuthorizedContract from './pages/manage/contract/InfoAuthorizedContract';
import EditAuthorizedContract from './pages/manage/contract/EditAuthorizedContract';
import EditPartnerAuthorized from './pages/manage/unitAuthorized/EditPartnerAuthorized';
import PartnerAuthorizedManage from './pages/manage/unitAuthorized/PartnerAuthorizedManage';
import UnitUsedDetail from './pages/manage/unitUsed/UnitUsedDetail';
import PartnerDetail from './pages/manage/unitUsed/PartnerDetail';
import PartnerEdit from './pages/manage/unitUsed/PartnerEdit';
import PartnerAdd from './pages/manage/unitUsed/PartnerAdd';
import DeviceManage from './pages/manage/device/DeviceManage';
import DeviceAdd from './pages/manage/device/DeviceAdd';
import DeviceDetail from './pages/manage/device/DeviceDetail';

const App = () => {

  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path='/login' element={<Login/>} />
        <Route path='/error' element={<Error/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />

        {/* Profile */}
        <Route path='/profile' element={<BasicInfo/>} />

        {/* Manage */}
          {/* Contract */}
        <Route path='/contract-manage' element={<ContractManage/>} />
        <Route path='/add-exploit-contract' element={<AddExploitContract/>} />
        <Route path='/add-authorized-contract' element={<AddAuthorizedContract/>} />
        <Route path='/info-exploit-contract/:id' element={<InfoExploitContract/>} />
        <Route path='/edit-exploit-contract/:id' element={<EditExploitContract/>} />
        <Route path='/copy-exploit-contract/:id' element={<CopyExploitContract/>} />
        <Route path='/edit-authorized-contract/:id' element={<EditAuthorizedContract/>} />
        <Route path='/info-authorized-contract/:id' element={<InfoAuthorizedContract/>} />
          {/* Partner Authorized */}
        <Route path='/edit-partner-authorized/:id' element={<EditPartnerAuthorized/>} />
        <Route path='/partner-authorized-manage' element={<PartnerAuthorizedManage/>} />
          {/* Unit Used */}
        <Route path='/partner-add/:id' element={<PartnerAdd/>} />
        <Route path='/partner-edit/:id' element={<PartnerEdit/>} />
        <Route path='/unit-used-manage' element={<UnitUsedManage/>} />
        <Route path='/partner-detail/:id' element={<PartnerDetail/>} />
        <Route path='/unit-used-detail/:id' element={<UnitUsedDetail/>} />
          {/* Device */}
        <Route path='/device-add' element={<DeviceAdd/>} />
        <Route path='/device-manage' element={<DeviceManage/>} />
        <Route path='/device-detail/:id' element={<DeviceDetail/>} />

        {/* Record Store */}
        <Route path='/record-store' element={<RecordStore/>} />
        <Route path='/edit-record/:id' element={<EditRecord/>} />

        {/* Playlist */}
        <Route path='/playlist' element={<Playlist/>} />
        <Route path='/add-playlist' element={<PlaylistAdd/>} />
        <Route path='/edit-playlist/:id' element={<PlaylistEdit/>} />
        <Route path='/detail-playlist/:id' element={<PlaylistDetail/>} />
        <Route path='/playlist-add-song/:id' element={<PlaylistAddSong/>} />
        <Route path='/new-playlist-add-song' element={<NewPlaylistAddSong/>} />

        {/* Broadcast */}
        <Route path='/broadcast-add' element={<BroadcastAdd/>} />
        <Route path='/broadcast-manage' element={<BroadcastManage/>} />
        <Route path='/broadcast-detail/:id' element={<BroadcastDetail/>} />
        <Route path='/broadcast-edit-device/:id' element={<BroadcastEditDevice/>} />
        <Route path='/broadcast-add-new-device' element={<BroadcastAddNewDevice/>} />
        <Route path='/broadcast-edit-playlist/:id' element={<BroadcastEditPlaylist/>} />

      </Routes>
    </Router>
  )
}

export default App;
