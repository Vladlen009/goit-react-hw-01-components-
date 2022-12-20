import PropTypes from 'prop-types';
import Stats from './Stats';
import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={css.section}>
      {title && <h2 className={title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <Stats label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;