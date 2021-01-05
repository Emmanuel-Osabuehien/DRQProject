import React from 'react';

//This is the homepage of my app
export class Home extends React.Component {

    render() {
        return (
            <div>
                <section className="one-fourth" id="html">
                    <img src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45288d0d-a93a-4bcb-af05-2c49d7836680/dahpx67-381c8d7c-435a-4a51-82e1-45a285e6fb4f.png/v1/fill/w_400,h_224,strp/welcome_to_the_game_png_logo__version_1__by_dotienlinhpc_dahpx67-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yMjQiLCJwYXRoIjoiXC9mXC80NTI4OGQwZC1hOTNhLTRiY2ItYWYwNS0yYzQ5ZDc4MzY2ODBcL2RhaHB4NjctMzgxYzhkN2MtNDM1YS00YTUxLTgyZTEtNDVhMjg1ZTZmYjRmLnBuZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.IBnW3LtDnQB3pl3qRfJqlNXWxsYMFa6ZzX_qfDe1RSk"} />
                </section>
                <h2 style={{ color: "white" }}>Today is the {new Date().toLocaleDateString()}</h2>
                <h2 style={{ color: "white" }}>At {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}