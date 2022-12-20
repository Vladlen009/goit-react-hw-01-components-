import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Stats({ label, percentage }) {
  return (
    <div className="item">
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </div>
  );
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;