// generated, do not edit

import { Broker } from '../broker';

import { Module } from './module';
import { Platform } from './platform';
import { Auth } from './auth';
import { Detection } from './detection';
import { Ui } from './ui';
import { Session } from './session';
import { Dialogue } from './dialogue';
import { Robotics } from './robotics';
import { Xr } from './xr';

export default class AsyncApiClient {
  public readonly module: Module;
  public readonly platform: Platform;
  public readonly auth: Auth;
  public readonly detection: Detection;
  public readonly ui: Ui;
  public readonly session: Session;
  public readonly dialogue: Dialogue;
  public readonly robotics: Robotics;
  public readonly xr: Xr;

  constructor(private readonly broker: Broker) {
    this.module = new Module(broker);
    this.platform = new Platform(broker);
    this.auth = new Auth(broker);
    this.detection = new Detection(broker);
    this.ui = new Ui(broker);
    this.session = new Session(broker);
    this.dialogue = new Dialogue(broker);
    this.robotics = new Robotics(broker);
    this.xr = new Xr(broker);
  }
}
