import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings74844Navigator from '../features/Settings74844/navigator';
import NotificationList74843Navigator from '../features/NotificationList74843/navigator';
import Maps74842Navigator from '../features/Maps74842/navigator';
import UserProfile74976Navigator from '../features/UserProfile74976/navigator';
import Maps74957Navigator from '../features/Maps74957/navigator';
import Settings74935Navigator from '../features/Settings74935/navigator';
import Settings74920Navigator from '../features/Settings74920/navigator';
import NotificationList74919Navigator from '../features/NotificationList74919/navigator';
import Maps74918Navigator from '../features/Maps74918/navigator';
import ArticleList74824Navigator from '../features/ArticleList74824/navigator';
import ArticleList74825Navigator from '../features/ArticleList74825/navigator';
import ArticleList74823Navigator from '../features/ArticleList74823/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings74844: { screen: Settings74844Navigator },
NotificationList74843: { screen: NotificationList74843Navigator },
Maps74842: { screen: Maps74842Navigator },
UserProfile74976: { screen: UserProfile74976Navigator },
Maps74957: { screen: Maps74957Navigator },
Settings74935: { screen: Settings74935Navigator },
Settings74920: { screen: Settings74920Navigator },
NotificationList74919: { screen: NotificationList74919Navigator },
Maps74918: { screen: Maps74918Navigator },
ArticleList74824: { screen: ArticleList74824Navigator },
ArticleList74825: { screen: ArticleList74825Navigator },
ArticleList74823: { screen: ArticleList74823Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
