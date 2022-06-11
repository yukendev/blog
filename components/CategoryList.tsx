import TechImg from '../images/CategoryTech.svg'
import BookImg from '../images/CategoryBook.svg'
import NoteImg from '../images/CategoryNote.svg'

export const CategoryList = (): JSX.Element => {
  return (
    <div className='flex'>
      {/* Technology */}
      <div>
        <TechImg widht={50} height={50} />
        <div className='text-center text-myTextColor'>Tech</div>
      </div>

      {/* Book */}
      <div className='ml-10'>
        <BookImg widht={50} height={50} />
        <div className='text-center text-myTextColor'>Book</div>
      </div>

      {/* Note */}
      <div className='ml-10'>
        <NoteImg widht={50} height={50} />
        <div className='text-center text-myTextColor'>Note</div>
      </div>
    </div>
  )
}