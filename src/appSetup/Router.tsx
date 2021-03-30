import { FC } from "react";
import { Switch, Redirect, Route } from 'react-router-dom';

import {
  EnterGroupPage,
  LoginPage, SchedulePage, SheduleDayPage
} from '../components';
import { GroupsPage } from "../components/pages/Schedule/GroupsPage";

import {
  Secure,
} from './SecureRoute';

type AppRoutesPropTypes = {
  children?: never;
}

export const AppRoutes: FC<AppRoutesPropTypes> = () => (
  <Switch>

    <Route path="/" exact>
      <ApplicationSecure>
        <div>
          123123
        </div>
      </ApplicationSecure>
    </Route>

    <Route path="/schedule" exact>
      {/* <LoginSecure> */}
        <GroupsPage />
      {/* </LoginSecure> */}
    </Route>

    <Route path="/schedule/add" exact>
      {/* <LoginSecure> */}
        <EnterGroupPage />
      {/* </LoginSecure> */}
    </Route>

    <Route path="/schedule/:id" exact>
      {/* <LoginSecure> */}
        <SchedulePage />
      {/* </LoginSecure> */}
    </Route>

    <Route path="/schedule/:id/:day" exact>
      {/* <LoginSecure> */}
        <SheduleDayPage />
      {/* </LoginSecure> */}
    </Route>

    <Route path="/login" exact>
      <LoginSecure>
        <LoginPage />
      </LoginSecure>
    </Route>

    <Redirect to="/" />
  </Switch>
);

export const appValidation = (tokenToCheck: string) => tokenToCheck.length > 0;
export const loginValidation = (tokenToCheck: string) => tokenToCheck.length === 0;

type SecureProps = {
  children: JSX.Element,
}

export const ApplicationSecure: FC<SecureProps> = (props) => (
  <Secure validation={appValidation} redirect="/login">
    {props.children}
  </Secure>
);

export const LoginSecure: FC<SecureProps> = (props) => (
  <Secure validation={loginValidation} redirect="/">
    {props.children}
  </Secure>
);