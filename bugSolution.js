```javascript
import React, { useRef, useEffect, useCallback } from 'react';

function MyComponent() {
  const myRef = useRef(null);
  const fetchData = useCallback(async () => {
    let isMounted = true;
    try {
      const response = await fetch('some_url');
      const data = await response.json();
      if (isMounted) {
        myRef.current.setState({ data });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      isMounted = false;
    }
  }, []);

  useEffect(() => {
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [fetchData]);

  return (
    <View>
      {/* ... */}
    </View>
  );
}
```