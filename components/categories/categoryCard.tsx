import styles from '@/assets/styles/category/categoryCard.styles';
import FText from '@/components/Text';
import { categoryType } from '@/interfaces/category.type';
import { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';

function CategoryCard({ category, onSubmit }: { category: categoryType; onSubmit: (id: string) => void }) {
  return (
    <TouchableOpacity style={styles.categoryContainer} onPress={() => onSubmit(category._id)}>
      <Image
        source={{ uri: category.image?.url || '@/assets/images/placeholder.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <FText numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
        {category.name}
      </FText>
    </TouchableOpacity>
  );
}

export default memo(CategoryCard);
