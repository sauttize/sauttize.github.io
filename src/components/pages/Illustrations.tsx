import '../styles/Contents.css'
import '../styles/Illustrations.css'

import WhiteLine from '../WhiteLine';
import IllustrationList from './IllustrationList';

function Illustrations() {
    return (
        <div className="ordered-content">
            {/* translate-x-32 */}
            <h1>Illustrations</h1>
            <h2>i draw from time to time, here are some of my favorite pieces</h2>
            <WhiteLine/>
            <IllustrationList showAll/>
        </div>
    );
}

export default Illustrations;