import { connect } from '../database';

/* eslint-disable no-console */

/**
 * Checks for database connection
 */
const loader = async (): Promise<void> => {
  try {
    console.log('database connecting...');
    await connect();
    console.log('database connected!');
  } catch (error) {
    throw new Error(`Database connection failed! Reason: ${error.message}`);
  }
};

export default loader;
