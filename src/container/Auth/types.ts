import { ConnectedProps } from 'react-redux';
import { connector } from './connector';

type PropsFromRedux = ConnectedProps<typeof connector>

export type AppPropsType = PropsFromRedux
