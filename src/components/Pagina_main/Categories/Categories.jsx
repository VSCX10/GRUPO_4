import categories from '../data/categories.json';
import './Categories.css';
import { useNavigate } from 'react-router-dom';

export default function Categories() {
    const navigate = useNavigate();

    const handleCategoryClick = (catName) => {
        navigate('/productos');
    };

    return (
        <section className="categories-section">
            <h2 className="categories-title">Explora las categorías</h2>
            <div className="categories-grid">
                {categories.map((cat) => (
                    <div
                        className="category-card"
                        key={cat.name}
                        onClick={() => handleCategoryClick(cat.name)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="category-img-container">
                            <img src={cat.image} alt={cat.name} />
                        </div>
                        <p className="category-name">{cat.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}