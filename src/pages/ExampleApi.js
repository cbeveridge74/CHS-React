import { useEffect, useState, useCallback } from "react";
import useHttp from "../hooks/use-http";

function ExampleApi() {
  //   const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  // If you add sendRequest() as a dependency you'll create an infinit loop as the hook updates state and as such it will cause component to re-render

  useEffect(() => {
    sendRequest();
  }, []);

  const transformData = useCallback((exampleData) => {
    const loadedData = exampleData.map((obj) => {
      let rObj = {
        id: obj.id,
        title: obj.title,
        body: obj.body,
      };
      return rObj;
    });
    setItems(loadedData);
    console.log("LoadedData in ExampleAPI", loadedData);
  },[]);

  // destructure the response from useHTTP
  // set an alias to sendRequst with a ':'
  const { isLoading, error, sendRequest } = useHttp(
    {
      url: "https://jsonplaceholder.typicode.com/users/1/posts",
    },
    transformData
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} {item.body}
          </li>
        ))}
      </ul>
    );
  }
}

export default ExampleApi;
