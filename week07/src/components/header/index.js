import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>useState</button>
      <button onClick={() => navigate('/ref')}>useRef</button>
      <button onClick={() => navigate('/memo')}>useMemo</button>
      <button onClick={() => navigate('/callback')}>useCallback</button>
      <button onClick={() => navigate('/effect')}>useEffect</button>
    </div>
  );
}
