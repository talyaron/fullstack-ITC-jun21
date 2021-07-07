import {Link, useLocation, useHistory, useParams} from "react-router-dom";
import { withRouter } from "react-router";

function MouseDescription(props) {
const location = useLocation();
const history = useHistory();
const params = useParams();

console.log(location);
console.log(history)
console.log(params);
const {id} = params;

    return <div>
        <h1>This is the data of mouse number {id}</h1>
        <h1>{location.pathname}</h1>
        <h2>A mouse, plural mice, is a small rodent. Characteristically, mice are known to have a pointed snout, small rounded ears, a body-length scaly tail, and a high breeding rate. The best known mouse species is the common house mouse (Mus musculus). Mice are also popular as pets. In some places, certain kinds of field mice are locally common. They are known to invade homes for food and shelter.

            Mice are typically distinguished from rats by their size. Generally, when a muroid rodent is discovered, its common name includes the term mouse if it is smaller, or rat if it is larger. The common terms rat and mouse are not taxonomically specific. Typical mice are classified in the genus Mus, but the term mouse is not confined to members of Mus and can also applies to species from other genera such as the deer mouse, Peromyscus.

            Domestic mice sold as pets often differ substantially in size from the common house mouse. This is attributable to breeding and different conditions in the wild. The best-known strain of mouse is the white lab mouse. It has more uniform traits that are appropriate to its use in research.

            Cats, wild dogs, foxes, birds of prey, snakes and even certain kinds of arthropods have been known to prey heavily upon mice. Despite this, mice populations remain plentiful. Due to its remarkable adaptability to almost any environment, the mouse is one of the most successful mammalian genera living on Earth today.

            In certain contexts, mice can be considered vermin. Vermin are a major source of crop damage,[1] as they are known to cause structural damage and spread disease. Mice spread disease through their feces and are often carriers of parasites.[2] In North America, breathing dust that has come in contact with mouse excrement has been linked to hantavirus, which may lead to hantavirus pulmonary syndrome (HPS).

            Primarily nocturnal[3] animals, mice compensate for their poor eyesight with a keen sense of hearing. They depend on their sense of smell to locate food and avoid predators.[4]

            In the wild, mice are known to build intricate burrows. These burrows have long entrances and are equipped with escape tunnels. In at least one species, the architectural design of a burrow is a genetic trait.</h2>;
        <Link to='/'><button>Back to my mouse</button></Link>
    </div>
}

export default withRouter(MouseDescription);