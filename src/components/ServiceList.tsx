import type { RootState } from '@/store/types'
import { useDispatch, useSelector } from 'react-redux'
import { deleteService, startEditing } from '@/store/actions'

export const ServiceList = () => {
  const dispatch = useDispatch()

  const services = useSelector((state: RootState) => state.services.items)

  return (
    <div className="service-list">
      <h2>
        Список услуг
      </h2>

      <p className="count">
        Всего услуг:
        {services.length}
      </p>

      {services.length === 0
        ? (
            <p>
              Услуг пока нет
            </p>
          )
        : (
            <ul>
              {services.map(service => (
                <li key={service.id}>
                  <span>
                    {service.name}
                    {' '}
                    —
                    {service.price}
                    {' '}
                    ₽
                  </span>

                  <div className="item-buttons">
                    <button onClick={() => dispatch(startEditing(service))}>
                      Редактировать
                    </button>

                    <button onClick={() => dispatch(deleteService(service.id))}>
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
    </div>
  )
}
