import React from 'react';
import Particles from 'react-particles-js';
// import loadable from '@loadable/component';

// const Particles = loadable(() => import('react-particles-js'));

const Particle = () => {
    return(
        <div className="particle-canvas">
            <Particles
                className="particle"
                params={{
                    particles: {
                        number: {
                            value: 100,
                        },
                        size: {
                            value: 1,
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            onClick: {
                                enable: false,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />
        </div>
    );
}

export default Particle;