import { createContext } from "react";
import IContext from '../intefaces/IContext';

const context = createContext<IContext>({} as IContext);

export default context;