/* global VERSION */
import '../components/commons.scss';
import React from 'react';
import AppBar from '../components/app_bar';
import Autocomplete from './components/autocomplete';
import AppBarTest from './components/app_bar';
import Avatar from './components/avatar';
import Autosuggest from './components/autosuggest';
import Badge from './components/badge';
import Button from './components/button';
import ButtonToolbox from '../components/button';
import Card from './components/card';
import Checkbox from './components/checkbox';
import Chip from './components/chip';
import Dialog from './components/dialog';
import Drawer from './components/drawer';
import Dropdown from './components/dropdown';
import IconMenu from './components/icon_menu';
import ButtonMenu from './components/button_menu';
import Input from './components/input';
import FontIcon from './components/font_icon';
import Layout from './components/layout';
import List from './components/list';
import Menu from './components/menu';
import Pickers from './components/pickers';
import Progress from './components/progress';
import Radio from './components/radio';
import Slider from './components/slider';
import Snackbar from './components/snackbar';
import Stepper from './components/stepper';
import SvgIcon from './components/svg_icon';
import Switch from './components/switch';
import Table from './components/table';
import Tabs from './components/tabs';
import Tooltip from './components/tooltip';
import style from './style';

const RootAppBar = () => (
  <AppBar className={style.appbar} fixed flat>
    <h1>React Toolbox <small>Spec {VERSION}</small></h1>
    <ButtonToolbox
      accent
      className={style.github}
      icon='web'
      floating
      onClick={() => {window.href = 'http://react-toolbox';}}
    />
  </AppBar>
);

const Root = () => (
  <div className={style.app}>
    <RootAppBar />
    <Autocomplete />
    <Autosuggest />
    <AppBarTest />
    <Avatar />
    <Badge />
    <Button />
    <Card />
    <Checkbox />
    <Chip />
    <Dialog />
    <Drawer />
    <Dropdown />
    <IconMenu />
    <ButtonMenu />
    <Input />
    <FontIcon />
    <Layout />
    <List />
    <Menu />
    <Pickers />
    <Progress />
    <Radio />
    <Slider />
    <Snackbar />
    <Stepper />
    <SvgIcon />
    <Switch />
    <Table />
    <Tabs />
    <Tooltip />
  </div>
);

export default Root;
