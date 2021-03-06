import styles from './Card.module.scss';

export default function Card({ results }) {
  let display;

  if (results) {
    display = results.map(res => {
      let { id, image, name, status, location } = res;

      return (
        <div key={id} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
          <div className={`${styles.card} d-flex flex-column justify-content-center`}>
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            const bg = status === 'Dead' ? 'bg-danger' : status === 'Alive' ? 'bg-success' : 'bg-secondary';

            return <div className={`${styles.badge} position-absolute badge ${bg}`}>{status}</div>;
          })()}
        </div>
      );
    });
  } else {
    display = 'No characters found';
  }

  return <>{display}</>;
}
