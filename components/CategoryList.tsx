import TechnologyImg from '../images/CategoryTechnology.svg'
import BookImg from '../images/CategoryBook.svg'
import NoteImg from '../images/CategoryNote.svg'


export const CategoryList = (): JSX.Element => {
  return (
    <div className='flex justify-between'>
      {/* Technology */}
      <div className='ml-1'>
        <TechnologyImg widht={50} height={50} />
        <div>Technology</div>
      </div>

      {/* Book */}
      <div className='flex-col content-center'>
        <BookImg widht={50} height={50} />
        <div>Book</div>
      </div>

      {/* Note */}
      <div>
        <NoteImg widht={50} height={50} />
        <div>Note</div>
      </div>
    </div>
  )
}