import Image from 'next/image'
import * as S from './styles'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <Image
        src="https://res.cloudinary.com/duim1pyqp/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_1000/v1644627031/misc/avatar-suit_ofxg9t.jpg"
        width={120}
        height={120}
        alt="My picture in a suit"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
