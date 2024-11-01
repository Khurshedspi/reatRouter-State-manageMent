import PropTypes from "prop-types";
const Link = ({ route }) => {
    // const {path, name} = route;
  return (
    <li className="mr-10 px-6 hover:bg-yellow-500" >
      <a href={route.path}>{route.name}</a>
    </li>
  );
};


Link.propTypes ={
    route:PropTypes.object.isRequired,
}
export default Link;
