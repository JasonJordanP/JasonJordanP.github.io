import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../stylesheets/reset.css';

export function VideoSistema () {
    return (
        <div className = 'video' id='video'>
        <iframe width="1080" height="615" src="https://www.youtube.com/embed/8dy27u_kX1I?start=358" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
};