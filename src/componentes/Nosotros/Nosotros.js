import React,{Component} from 'react';
import './Nosotros.css';

export default class Nosotros extends Component {

    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros" />
                </div>
                <div className="contenido">
                    <h2>Sobre nosotros</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu sodales orci. Quisque feugiat iaculis justo at pulvinar. Fusce a scelerisque eros. Phasellus a erat justo. Aliquam vitae arcu arcu. Phasellus rutrum efficitur nisl ut pulvinar. Aenean eu lectus non lorem viverra semper vel in diam. Nullam molestie ac orci nec semper. Vivamus velit justo, varius non gravida eu, consequat non magna. Cras auctor mi in felis aliquam tincidunt. Sed purus nisi, venenatis sit amet vestibulum et, egestas ut risus. Nullam enim odio, consectetur non fermentum ac, sodales in diam. Mauris eget justo tempus, rutrum mi at, placerat nisl. Fusce non quam tortor.
                    </p>
                </div>
            </div>
        );
    }
}