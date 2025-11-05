const AboutPage = () => {
  return (
    <div>
      <ul>
        <li>
          26/05/2021 - Added route guard around TasksList, added home screen and
          default 'catch me all route to home'. Added this about page.
        </li>
        <li>27/05/2021 - Fixed routing bug, now any unknown URL redirects to home page. Moved Tasks into own components sub folder</li>
        <li>30/05/2021 - Added browser and userId as URL query params to switch header on or off and change user</li>
        <li>02/06/2021 - Added auto login and timeout for logging out, currently hardwired to 5 mins, but will be a param</li>
        <li>06/06/2021 - Set web app to default on. Added header and links, strugglig with local storage API</li>
        <li>08/06/2021 - DCB added file upload linked to MS's test service. Added menu items. Made logo responsive on sm and xs size screens</li>
        <li>10/06/2021 - Started refactoring newtask page, removed logic from App.js, but needs more work</li>
        <li>12/06/2021 - Added priority to newtask page, added custom hook for HTTP requests and used it in example API which call jsonplaceholder</li>
        <li>14/06/2021 - Added redirect state to app.js to pass location history and used in auth page to go back to where auth called from</li>
        <li>25/06/2021 - CB updated Docs page to auto load the letter and display results automatically. Removed Doc Centre and updated about</li>
        <li>27/06/2021 - CB added stepper for each entity of a letter</li>
      </ul>
    </div>
  );
};

export default AboutPage;
