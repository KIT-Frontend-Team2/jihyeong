import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import UseState from '../components/useState';
import UseRef from '../components/useRef';
import UseMemo from '../components/useMemo';
import UseCallback from '../components/useCallback';
import UseEffect from '../components/useEffect';

const router = createBrowserRouter([
        {
            path: '/', 
            element :<Layout/>,
            children: [
                {path: '/', element: <UseState/>},
                {path: '/ref', element: <UseRef/>},
                {path: '/memo', element: <UseMemo/>},
                {path: '/callback', element: <UseCallback/>},
                {path: '/effect', element: <UseEffect/>},
            ],
            errorElement : <UseState/>
        }
    ])

export default router