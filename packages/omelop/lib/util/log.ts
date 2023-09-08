import * as logger from 'omelop-logger';
import { Application } from '../application';

/**
 * Configure omelop logger
 */
export function configure(app: Application, filename: string) {
  let serverId = app.getServerId();
  let base = app.getBase();
  logger.configure(filename, { serverId: serverId, base: base });
}
