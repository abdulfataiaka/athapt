import Config from './config';
import Server from './server';

export default () => (new Server(new Config()));
