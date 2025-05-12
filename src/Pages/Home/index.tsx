import './style.css';

const HomePage = () => {
    return (
        <div className="master-container">
            <div className="card-container-area">
                <h1>Cole a sua URL abaixo</h1>
                <div className="input-area">
                    <input type="text" title="Cole sua URL"/>
                    <button>
                        Encurtar
                    </button>
                </div>
                <p>Gere um link curto para a sua URL e a use livremente para compartilhamento e acesso.</p>
            </div>
        </div>
    )
}

export default HomePage;