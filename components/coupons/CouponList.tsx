import { CouponType } from '@/interfaces/coupon.type';
import { useCoupon } from '@/server/hooks/useCoupon';
import { memo, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import FText from '../Text';
import { CouponItem } from './CouponCard';

const CouponList = () => {
  const [data, setData] = useState<CouponType[]>([]);

  const { getAllDiscountUser } = useCoupon();
  useEffect(() => {
    getAllDiscountUser().then((res) => setData(res.data));
  });
  const keyExtractorCoupon = (item: CouponType, index: number) => {
    const id = item._id?.toString() || `temp-${index}`;
    return `${id}-${index}`;
  };
  const renderItem = ({ item }: { item: CouponType }) => <CouponItem coupon={item} />;

  return (
    <View style={{ flex: 1 }}>
      <FText style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Danh sách mã giảm giá</FText>
      <FlatList
        data={data}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={keyExtractorCoupon}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(CouponList);
